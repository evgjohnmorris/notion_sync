/**
 * Generated Tool: usersTool_0575
 * Domain: Users
 * ID: 0575
 */
exports.usersTool_0575 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0575:', error);
    throw error;
  }
};
