/**
 * Generated Tool: usersTool_0586
 * Domain: Users
 * ID: 0586
 */
exports.usersTool_0586 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0586:', error);
    throw error;
  }
};
