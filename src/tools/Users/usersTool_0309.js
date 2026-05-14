/**
 * Generated Tool: usersTool_0309
 * Domain: Users
 * ID: 0309
 */
exports.usersTool_0309 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0309:', error);
    throw error;
  }
};
