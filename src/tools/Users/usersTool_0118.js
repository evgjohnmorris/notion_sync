/**
 * Generated Tool: usersTool_0118
 * Domain: Users
 * ID: 0118
 */
exports.usersTool_0118 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0118:', error);
    throw error;
  }
};
