/**
 * Generated Tool: usersTool_0810
 * Domain: Users
 * ID: 0810
 */
exports.usersTool_0810 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0810:', error);
    throw error;
  }
};
