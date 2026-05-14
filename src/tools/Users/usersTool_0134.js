/**
 * Generated Tool: usersTool_0134
 * Domain: Users
 * ID: 0134
 */
exports.usersTool_0134 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0134:', error);
    throw error;
  }
};
