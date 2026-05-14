/**
 * Generated Tool: usersTool_0385
 * Domain: Users
 * ID: 0385
 */
exports.usersTool_0385 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0385:', error);
    throw error;
  }
};
