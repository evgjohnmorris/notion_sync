/**
 * Generated Tool: usersTool_0359
 * Domain: Users
 * ID: 0359
 */
exports.usersTool_0359 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0359:', error);
    throw error;
  }
};
