/**
 * Generated Tool: usersTool_0482
 * Domain: Users
 * ID: 0482
 */
exports.usersTool_0482 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0482:', error);
    throw error;
  }
};
