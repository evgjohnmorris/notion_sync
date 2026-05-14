/**
 * Generated Tool: usersTool_0667
 * Domain: Users
 * ID: 0667
 */
exports.usersTool_0667 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.list(params);
    return response;
  } catch (error) {
    console.error('Error in usersTool_0667:', error);
    throw error;
  }
};
