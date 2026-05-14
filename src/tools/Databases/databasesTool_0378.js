/**
 * Generated Tool: databasesTool_0378
 * Domain: Databases
 * ID: 0378
 */
exports.databasesTool_0378 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0378:', error);
    throw error;
  }
};
