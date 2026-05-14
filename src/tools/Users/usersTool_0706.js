/**
 * Generated Tool: usersTool_0706
 * Domain: Users
 * ID: 0706
 */
exports.usersTool_0706 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0706:', error);
    throw error;
  }
};
