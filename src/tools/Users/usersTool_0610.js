/**
 * Generated Tool: usersTool_0610
 * Domain: Users
 * ID: 0610
 */
exports.usersTool_0610 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0610:', error);
    throw error;
  }
};
