/**
 * Generated Tool: usersTool_0203
 * Domain: Users
 * ID: 0203
 */
exports.usersTool_0203 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0203:', error);
    throw error;
  }
};
