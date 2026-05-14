/**
 * Generated Tool: databasesTool_0459
 * Domain: Databases
 * ID: 0459
 */
exports.databasesTool_0459 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0459:', error);
    throw error;
  }
};
