/**
 * Generated Tool: usersTool_0595
 * Domain: Users
 * ID: 0595
 */
exports.usersTool_0595 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0595:', error);
    throw error;
  }
};
