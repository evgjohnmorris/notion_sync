/**
 * Generated Tool: usersTool_0927
 * Domain: Users
 * ID: 0927
 */
exports.usersTool_0927 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0927:', error);
    throw error;
  }
};
