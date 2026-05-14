/**
 * Generated Tool: databasesTool_0424
 * Domain: Databases
 * ID: 0424
 */
exports.databasesTool_0424 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0424:', error);
    throw error;
  }
};
