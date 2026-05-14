/**
 * Generated Tool: databasesTool_0483
 * Domain: Databases
 * ID: 0483
 */
exports.databasesTool_0483 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0483:', error);
    throw error;
  }
};
