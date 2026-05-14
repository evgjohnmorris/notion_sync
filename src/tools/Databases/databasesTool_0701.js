/**
 * Generated Tool: databasesTool_0701
 * Domain: Databases
 * ID: 0701
 */
exports.databasesTool_0701 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0701:', error);
    throw error;
  }
};
