/**
 * Generated Tool: usersTool_0770
 * Domain: Users
 * ID: 0770
 */
exports.usersTool_0770 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0770:', error);
    throw error;
  }
};
