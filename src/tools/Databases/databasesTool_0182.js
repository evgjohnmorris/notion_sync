/**
 * Generated Tool: databasesTool_0182
 * Domain: Databases
 * ID: 0182
 */
exports.databasesTool_0182 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0182:', error);
    throw error;
  }
};
