/**
 * Generated Tool: usersTool_0666
 * Domain: Users
 * ID: 0666
 */
exports.usersTool_0666 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0666:', error);
    throw error;
  }
};
