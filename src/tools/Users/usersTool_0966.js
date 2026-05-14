/**
 * Generated Tool: usersTool_0966
 * Domain: Users
 * ID: 0966
 */
exports.usersTool_0966 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0966:', error);
    throw error;
  }
};
