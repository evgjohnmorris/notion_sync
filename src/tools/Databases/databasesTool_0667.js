/**
 * Generated Tool: databasesTool_0667
 * Domain: Databases
 * ID: 0667
 */
exports.databasesTool_0667 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0667:', error);
    throw error;
  }
};
