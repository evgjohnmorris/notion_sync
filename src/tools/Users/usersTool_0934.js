/**
 * Generated Tool: usersTool_0934
 * Domain: Users
 * ID: 0934
 */
exports.usersTool_0934 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0934:', error);
    throw error;
  }
};
