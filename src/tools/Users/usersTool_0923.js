/**
 * Generated Tool: usersTool_0923
 * Domain: Users
 * ID: 0923
 */
exports.usersTool_0923 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0923:', error);
    throw error;
  }
};
