/**
 * Generated Tool: usersTool_0276
 * Domain: Users
 * ID: 0276
 */
exports.usersTool_0276 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0276:', error);
    throw error;
  }
};
