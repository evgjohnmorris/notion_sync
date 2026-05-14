/**
 * Generated Tool: usersTool_0579
 * Domain: Users
 * ID: 0579
 */
exports.usersTool_0579 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0579:', error);
    throw error;
  }
};
