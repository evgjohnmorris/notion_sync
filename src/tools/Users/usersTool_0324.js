/**
 * Generated Tool: usersTool_0324
 * Domain: Users
 * ID: 0324
 */
exports.usersTool_0324 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0324:', error);
    throw error;
  }
};
