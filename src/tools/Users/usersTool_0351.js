/**
 * Generated Tool: usersTool_0351
 * Domain: Users
 * ID: 0351
 */
exports.usersTool_0351 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0351:', error);
    throw error;
  }
};
