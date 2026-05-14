/**
 * Generated Tool: usersTool_0257
 * Domain: Users
 * ID: 0257
 */
exports.usersTool_0257 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0257:', error);
    throw error;
  }
};
