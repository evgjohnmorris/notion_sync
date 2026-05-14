/**
 * Generated Tool: usersTool_0514
 * Domain: Users
 * ID: 0514
 */
exports.usersTool_0514 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0514:', error);
    throw error;
  }
};
