/**
 * Generated Tool: usersTool_0420
 * Domain: Users
 * ID: 0420
 */
exports.usersTool_0420 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0420:', error);
    throw error;
  }
};
