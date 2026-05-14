/**
 * Generated Tool: databasesTool_0517
 * Domain: Databases
 * ID: 0517
 */
exports.databasesTool_0517 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0517:', error);
    throw error;
  }
};
