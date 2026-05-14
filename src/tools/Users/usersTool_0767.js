/**
 * Generated Tool: usersTool_0767
 * Domain: Users
 * ID: 0767
 */
exports.usersTool_0767 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0767:', error);
    throw error;
  }
};
