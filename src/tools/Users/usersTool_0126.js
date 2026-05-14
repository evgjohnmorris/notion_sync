/**
 * Generated Tool: usersTool_0126
 * Domain: Users
 * ID: 0126
 */
exports.usersTool_0126 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0126:', error);
    throw error;
  }
};
