/**
 * Generated Tool: usersTool_0694
 * Domain: Users
 * ID: 0694
 */
exports.usersTool_0694 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0694:', error);
    throw error;
  }
};
