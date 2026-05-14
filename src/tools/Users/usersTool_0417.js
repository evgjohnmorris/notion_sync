/**
 * Generated Tool: usersTool_0417
 * Domain: Users
 * ID: 0417
 */
exports.usersTool_0417 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0417:', error);
    throw error;
  }
};
