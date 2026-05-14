/**
 * Generated Tool: usersTool_0131
 * Domain: Users
 * ID: 0131
 */
exports.usersTool_0131 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0131:', error);
    throw error;
  }
};
