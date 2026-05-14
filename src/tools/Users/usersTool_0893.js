/**
 * Generated Tool: usersTool_0893
 * Domain: Users
 * ID: 0893
 */
exports.usersTool_0893 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0893:', error);
    throw error;
  }
};
