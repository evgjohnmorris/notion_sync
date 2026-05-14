/**
 * Generated Tool: databasesTool_0409
 * Domain: Databases
 * ID: 0409
 */
exports.databasesTool_0409 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0409:', error);
    throw error;
  }
};
