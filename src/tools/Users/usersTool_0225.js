/**
 * Generated Tool: usersTool_0225
 * Domain: Users
 * ID: 0225
 */
exports.usersTool_0225 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0225:', error);
    throw error;
  }
};
