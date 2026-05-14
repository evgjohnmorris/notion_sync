/**
 * Generated Tool: databasesTool_0335
 * Domain: Databases
 * ID: 0335
 */
exports.databasesTool_0335 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0335:', error);
    throw error;
  }
};
