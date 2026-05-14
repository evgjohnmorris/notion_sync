/**
 * Generated Tool: usersTool_0888
 * Domain: Users
 * ID: 0888
 */
exports.usersTool_0888 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0888:', error);
    throw error;
  }
};
