/**
 * Generated Tool: usersTool_0491
 * Domain: Users
 * ID: 0491
 */
exports.usersTool_0491 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0491:', error);
    throw error;
  }
};
