/**
 * Generated Tool: usersTool_0540
 * Domain: Users
 * ID: 0540
 */
exports.usersTool_0540 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0540:', error);
    throw error;
  }
};
