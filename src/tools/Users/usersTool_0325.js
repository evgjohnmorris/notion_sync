/**
 * Generated Tool: usersTool_0325
 * Domain: Users
 * ID: 0325
 */
exports.usersTool_0325 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0325:', error);
    throw error;
  }
};
