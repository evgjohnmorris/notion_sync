/**
 * Generated Tool: usersTool_0880
 * Domain: Users
 * ID: 0880
 */
exports.usersTool_0880 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0880:', error);
    throw error;
  }
};
