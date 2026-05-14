/**
 * Generated Tool: usersTool_0773
 * Domain: Users
 * ID: 0773
 */
exports.usersTool_0773 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0773:', error);
    throw error;
  }
};
