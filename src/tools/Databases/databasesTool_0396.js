/**
 * Generated Tool: databasesTool_0396
 * Domain: Databases
 * ID: 0396
 */
exports.databasesTool_0396 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0396:', error);
    throw error;
  }
};
