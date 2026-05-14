/**
 * Generated Tool: usersTool_0932
 * Domain: Users
 * ID: 0932
 */
exports.usersTool_0932 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0932:', error);
    throw error;
  }
};
