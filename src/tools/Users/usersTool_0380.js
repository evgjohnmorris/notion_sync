/**
 * Generated Tool: usersTool_0380
 * Domain: Users
 * ID: 0380
 */
exports.usersTool_0380 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0380:', error);
    throw error;
  }
};
