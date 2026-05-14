/**
 * Generated Tool: usersTool_0021
 * Domain: Users
 * ID: 0021
 */
exports.usersTool_0021 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0021:', error);
    throw error;
  }
};
